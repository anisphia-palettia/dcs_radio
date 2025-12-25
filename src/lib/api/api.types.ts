export type SuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
  meta?: Record<string, unknown>;
};

export type ErrorResponse = {
  success: false;
  message: string;
  meta?: Record<string, unknown>;
};
