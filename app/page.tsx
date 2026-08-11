import Design2 from "@/components/variations/design2";
import { profile } from "@/lib/profile";

/**
 * 메인 소개 페이지.
 * 서비스 톤에 맞춰 Dark Professional(미드나잇 스튜디오) 변주를 기본으로 씁니다.
 */
export default function Home() {
  return <Design2 profile={profile} />;
}
