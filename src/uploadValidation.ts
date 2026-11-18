export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

export type UploadValidation = { valid: true } | { valid: false; message: string };

export function validateUploadFile(file: { name: string; size: number }): UploadValidation {
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!["pdf", "jpg", "jpeg", "png"].includes(extension ?? "")) {
    return {
      valid: false,
      message: "Unsupported format. Choose a PDF, JPG or PNG file.",
    };
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return {
      valid: false,
      message: "File is larger than the 5 MB limit.",
    };
  }
  return { valid: true };
}

export function requiredDocumentsReady(uploads: Record<string, { status: string }>): boolean {
  return ["income", "education"].every((id) => uploads[id]?.status === "success");
}
