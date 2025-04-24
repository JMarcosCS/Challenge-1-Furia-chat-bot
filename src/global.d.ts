export {};

declare global {
  interface Window {
    chtlConfig?: {
      chatbotId: string;
      display: string;
      settings?: {
        widgetPosition?: string;
        widgetBehavior?: string;
        containerStyle?: {
          width?: string;
          height?: string;
        };
      };
    };
  }
}