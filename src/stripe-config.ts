export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1RfArCCp60NnoQx6GWDx2trt',
    name: 'Support Snuggles',
    description: 'Donation to support Snuggles, the AI co-host.',
    mode: 'subscription',
  },
];