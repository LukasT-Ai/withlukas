import { NextRequest, NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

export const dynamic = "force-dynamic";

function getClient() {
  const json = process.env.GA_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error("GA_SERVICE_ACCOUNT_JSON not set");
  const credentials = JSON.parse(json);
  return new BetaAnalyticsDataClient({ credentials });
}

export async function GET(req: NextRequest) {
  const password = req.nextUrl.searchParams.get("key");
  if (!password || password !== process.env.ANALYTICS_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) {
    return NextResponse.json({ error: "GA4_PROPERTY_ID not set" }, { status: 503 });
  }

  try {
    const client = getClient();
    const property = `properties/${propertyId}`;

    const [overviewToday, overview7d, overview30d, topPages, sources, devices, countries, realtime] =
      await Promise.all([
        client.runReport({
          property,
          dateRanges: [{ startDate: "today", endDate: "today" }],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "bounceRate" },
            { name: "averageSessionDuration" },
          ],
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "bounceRate" },
            { name: "averageSessionDuration" },
          ],
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "bounceRate" },
            { name: "averageSessionDuration" },
          ],
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [{ name: "pagePath" }],
          metrics: [
            { name: "screenPageViews" },
            { name: "activeUsers" },
          ],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 15,
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [{ name: "sessionSource" }],
          metrics: [
            { name: "sessions" },
            { name: "activeUsers" },
          ],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
          limit: 10,
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [{ name: "deviceCategory" }],
          metrics: [{ name: "sessions" }],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        }),
        client.runReport({
          property,
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [{ name: "country" }],
          metrics: [
            { name: "sessions" },
            { name: "activeUsers" },
          ],
          orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
          limit: 10,
        }),
        client.runRealtimeReport({
          property,
          metrics: [{ name: "activeUsers" }],
        }),
      ]);

    function extractOverview(report: typeof overviewToday) {
      const row = report[0]?.rows?.[0];
      if (!row) return { users: 0, pageViews: 0, sessions: 0, bounceRate: 0, avgDuration: 0 };
      return {
        users: Number(row.metricValues?.[0]?.value || 0),
        pageViews: Number(row.metricValues?.[1]?.value || 0),
        sessions: Number(row.metricValues?.[2]?.value || 0),
        bounceRate: Number(Number(row.metricValues?.[3]?.value || 0).toFixed(1)),
        avgDuration: Number(Number(row.metricValues?.[4]?.value || 0).toFixed(0)),
      };
    }

    function extractTable(report: typeof topPages, dimLabel: string, metricLabels: string[]) {
      return (report[0]?.rows || []).map((row) => ({
        [dimLabel]: row.dimensionValues?.[0]?.value || "",
        ...Object.fromEntries(
          metricLabels.map((label, i) => [label, Number(row.metricValues?.[i]?.value || 0)])
        ),
      }));
    }

    const realtimeUsers = Number(realtime[0]?.rows?.[0]?.metricValues?.[0]?.value || 0);

    return NextResponse.json({
      realtime: realtimeUsers,
      today: extractOverview(overviewToday),
      week: extractOverview(overview7d),
      month: extractOverview(overview30d),
      topPages: extractTable(topPages, "page", ["views", "users"]),
      sources: extractTable(sources, "source", ["sessions", "users"]),
      devices: extractTable(devices, "device", ["sessions"]),
      countries: extractTable(countries, "country", ["sessions", "users"]),
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Analytics API error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
