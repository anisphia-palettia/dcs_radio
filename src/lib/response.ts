import { NextResponse } from "next/server";
import { ErrorResponse, SuccessResponse } from "./api/api.types";

export function successResponse<T>(
  data: T,
  options?: {
    status?: number;
    message?: string;
    meta?: Record<string, unknown>;
  }
) {
  return NextResponse.json<SuccessResponse<T>>(
    {
      success: true,
      message: options?.message ?? "success",
      data,
      meta: options?.meta,
    },
    {
      status: options?.status ?? 200,
    }
  );
}

export function errorResponse<T>(
  message: string,
  options?: {
    status?: number;
    meta?: Record<string, unknown>;
  }
) {
  return NextResponse.json<ErrorResponse>(
    {
      success: false,
      message,
      meta: options?.meta,
    },
    {
      status: options?.status ?? 500,
    }
  );
}
