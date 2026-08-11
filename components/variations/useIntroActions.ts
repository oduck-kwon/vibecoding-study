"use client";

import { useCallback, useState } from "react";

/**
 * 소개 페이지의 공통 인터랙션.
 * 이메일 복사와 푸터 연도를 모든 변주에서 동일하게 사용합니다.
 */
export function useIntroActions(email: string) {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 권한이 없으면 메일 클라이언트로 넘깁니다.
      window.location.href = `mailto:${email}`;
    }
  }, [email]);

  return {
    copied,
    copyEmail,
    year: new Date().getFullYear(),
  };
}
