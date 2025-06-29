'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { createClient } from '@/lib/supabase/client';
import { stripeProducts } from '@/src/stripe-config';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchSubscription() {
      try {
        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
          .maybeSingle();

        if (error) {
          console.error('Error fetching subscription:', error);
        } else {
          setSubscription(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();
  }, [supabase]);

  if (loading) {
    return (
      <Card className="bg-black/50 border-blue-400/30">
        <CardContent className="pt-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-600 rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <Card className="bg-black/50 border-gray-600/30">
        <CardHeader>
          <CardTitle className="text-gray-300">No Active Subscription</CardTitle>
          <CardDescription className="text-gray-400">
            Support Snuggles by subscribing to one of our plans.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const product = stripeProducts.find(p => p.priceId === subscription.price_id);
  const statusColor = subscription.subscription_status === 'active' ? 'bg-green-600' : 'bg-yellow-600';
  const endDate = subscription.current_period_end 
    ? new Date(subscription.current_period_end * 1000).toLocaleDateString()
    : null;

  return (
    <Card className="bg-black/50 border-green-400/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-green-400">
            {product?.name || 'Active Subscription'}
          </CardTitle>
          <Badge className={`${statusColor} text-white`}>
            {subscription.subscription_status}
          </Badge>
        </div>
        {product && (
          <CardDescription className="text-gray-300">
            {product.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-gray-300">
          {endDate && (
            <p>
              {subscription.cancel_at_period_end ? 'Expires' : 'Renews'} on: {endDate}
            </p>
          )}
          {subscription.cancel_at_period_end && (
            <p className="text-yellow-400">
              Your subscription will not renew automatically.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}