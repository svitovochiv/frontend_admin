export interface Error {
  errorMessages: { message: string }[];
  statusCode: number;
}

export interface RTKError {
  data: Error;
}

export const isError = (error: unknown): error is Error => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'errorMessages' in error &&
    'statusCode' in error &&
    Array.isArray((error as Error).errorMessages)
  );
};

export const isRTKError = (error: unknown): error is RTKError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    isError((error as RTKError).data)
  );
};
