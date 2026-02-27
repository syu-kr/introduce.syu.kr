const TOKEN_KEY = "admin_token";

// 클라이언트 전용: localStorage 토큰 관리는 더 이상 사용하지 않음
// 인증은 HttpOnly 쿠키로 서버에서 관리됨

export async function loginAdmin(password: string): Promise<boolean> {
  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  return response.ok;
}

export async function logoutAdmin(): Promise<void> {
  await fetch("/api/admin/logout", { method: "POST" });
}

export async function checkAuth(): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/check");
    return response.ok;
  } catch {
    return false;
  }
}
