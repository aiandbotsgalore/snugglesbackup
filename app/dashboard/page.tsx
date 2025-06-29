import { AuthWrapper } from '@/components/auth-wrapper';
import { SubscriptionStatus } from '@/components/subscription-status';
import { ProductCard } from '@/components/product-card';
import { stripeProducts } from '@/src/stripe-config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <AuthWrapper requireAuth={true}>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-cyan-400">Dashboard</h1>
            <Link href="/">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-300 mb-4">Subscription Status</h2>
              <SubscriptionStatus />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-300 mb-4">Available Plans</h2>
              <div className="space-y-4">
                {stripeProducts.map((product) => (
                  <ProductCard key={product.priceId} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}