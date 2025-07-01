import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    // Forward the request to Convex HTTP endpoint
    const response = await fetch(`${process.env.CONVEX_SITE_URL}/vapi/replace-meal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data;
    const text = await response.text();
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid response from backend", backendResponse: text },
        { status: 500 }
      );
    }

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { success: false, error: data?.error || "Failed to replace meal" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error in replace-meal API route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
} 