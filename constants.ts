import { Zap, Flame, Wifi, Users, TrendingUp, Phone, Mail, FileText, BarChart3, ShieldCheck, Target } from "lucide-react";
import { CompanyInfo, NavItem, ServiceItem, FlowStep, StatItem, StrengthItem, NewsItem } from "./types";

export const COMPANY_INFO: CompanyInfo = {
  name: "株式会社KAO LINK",
  representative: "澤井 優輝",
  establishment: "2025年9月24日",
  capital: "100万円",
  employees: "12名",
  address: "大阪府門真市松生町1-16-211",
  phone: "070-9047-1520",
  email: "kaolink.ltd@gmail.com",
  mainBusiness: "電気・ガス・通信",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#company" },
  { label: "Services", href: "#business" },
  { label: "Process", href: "#flow" },
  { label: "Contact", href: "#cta" },
];

export const STATS: StatItem[] = [
  { number: 1000, suffix: "+", label: "契約実績", icon: FileText },
  { number: 98, suffix: "%", label: "顧客満足度", icon: Users },
  { number: 30, suffix: "%", label: "平均削減率", icon: TrendingUp },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "electric",
    title: "電力コスト最適化",
    subtitle: "ELECTRICITY OPTIMIZATION",
    description: "市場連動型プランのリスク分析から、貴社の使用状況に最適な固定・変動プランの選定まで。独自のデータベースに基づき、確実なコストダウンを実現します。",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gas",
    title: "ガス料金見直し",
    subtitle: "GAS SUPPLY MANAGEMENT",
    description: "都市ガス・プロパンガスの適正価格診断を実施。地域最安値水準のサプライヤーへの切り替え交渉を代行し、固定費を恒久的に圧縮します。",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "internet",
    title: "通信インフラ整備",
    subtitle: "NETWORK SOLUTIONS",
    description: "光回線からモバイル端末まで、法人契約ならではの特別プランをご提案。通信速度を維持・向上させつつ、無駄なオプションを徹底排除します。",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
];

export const STRENGTHS: StrengthItem[] = [
  {
    title: "本質的なコスト削減",
    description: "単なる「安売り」ではありません。お客様のエネルギー使用データに基づき、損益分岐点を緻密に計算。長期的に利益を生み出すプランのみをご提案します。",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Data analysis
    reverse: false,
  },
  {
    title: "完全成功報酬型の思考",
    description: "私たちの利益は、お客様の満足の上に成り立っています。無理な契約切り替えや、メリットの出ない提案は一切行いません。ビジネスパートナーとしての信頼を最優先します。",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", // Handshake
    reverse: true,
  },
  {
    title: "迅速なプロフェッショナル対応",
    description: "大手のコールセンターのような「たらい回し」はありません。専任のコンサルタントが窓口となり、導入からアフターフォローまで、スピード感を持って対応します。",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", // Professional discussion
    reverse: false,
  },
];

export const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "現状分析・診断",
    description: "検針票や請求書を基に、現状のコスト構造を可視化します。",
  },
  {
    step: "02",
    title: "最適化プランご提案",
    description: "削減シミュレーションを作成し、具体的なメリットをご提示します。",
  },
  {
    step: "03",
    title: "契約手続き代行",
    description: "面倒な切り替え手続きは全て弊社が代行。業務負担はありません。",
  },
  {
    step: "04",
    title: "運用開始・サポート",
    description: "切り替え後も定期的に適正価格をモニタリングします。",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  { date: "2025.10.01", category: "RECRUIT", title: "事業拡大に伴い、パートナー企業の募集を開始しました" },
  { date: "2025.09.25", category: "PRESS", title: "コーポレートサイトを正式公開いたしました" },
  { date: "2025.09.24", category: "INFO", title: "株式会社KAO LINKを設立いたしました" },
];