interface MainLayoutProps_HeaderText {
  showBackButton?: boolean;
  headerComponent?: never;
  headerMainText: string;
  headerSubText?: string;
  body: React.ReactNode;
  footerComponent?: React.ReactNode;
  footerMainText?: never;
  footerSubText?: never;
  bgColor?: string;
}
interface MainLayoutProps_HeaderNode {
  showBackButton?: boolean;
  headerComponent: React.ReactNode;
  headerMainText?: never;
  headerSubText?: never;
  body: React.ReactNode;
  footerComponent?: React.ReactNode;
  footerMainText?: never;
  footerSubText?: never;
  bgColor?: string;
}
interface MainLayoutProps_FooterText {
  showBackButton?: boolean;
  headerComponent: React.ReactNode;
  headerMainText?: never;
  headerSubText?: never;
  body: React.ReactNode;
  footerComponent?: never;
  footerMainText?: string;
  footerSubText?: string;
  bgColor?: string;
}
export type MainLayoutProps =
  | MainLayoutProps_HeaderText
  | MainLayoutProps_HeaderNode
  | MainLayoutProps_FooterText;
