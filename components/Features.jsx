import React from 'react'
import { Squares2X2Icon, DocumentDuplicateIcon, PrinterIcon, BoltIcon, DocumentChartBarIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Order Tracking Dashboard',
    description:
      'Efficiently track and manage orders in real time, offering transparency and accuracy from placement to delivery. Enhance customer satisfaction through improved order visibility and management.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automated Reporting',
    description:
      'Generate critical reports automatically for inventory, sales, and performance metrics. Save time and improve decision-making with timely, data-driven insights directly delivered to your inbox.',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Integrated Label Print Server',
    description:
      'Streamline your labeling process with direct, in-system printing of shipping, inventory, and custom labels. Reduce manual errors and enhance operational efficiency with seamless label integration.',
    icon: PrinterIcon,
  },
  {
    name: 'Quick Order Management',
    description:
      'Accelerate order processing with an intuitive system designed for quick order entry, modification, and fulfillment. Increase productivity and respond faster to customer demands.',
    icon: BoltIcon,
  },
  {
    name: 'Analytics Reporting',
    description:
      'Gain strategic insights with customizable dashboards and detailed analytics reporting. Optimize operations, improve customer service, and drive profitability with actionable data.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Product Freshness Tracking',
    description:
      'Monitor and manage product freshness to prioritize shipments and reduce waste. Ensure the delivery of fresh produce to customers, enhancing satisfaction and minimizing losses.',
    icon: ShoppingCartIcon,
  }
  
]

function Features() {
  return (
  

    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32" id='features'>

        <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
            <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
            >
                <path d="M.5 200V.5H200" fill="none" />
            </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#40C057]">Modernize your operation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Inventory, order tracking, reporting, data analytics, client management: <br /> <span className='text-[#40C057]'>all in one place</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            FreshTrack is customizable for each operation, allowing users to get get the benefits of a custom software at the price of commercial systems. Check out these key features to see if they could better your day to day operations:
            </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#40C057]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
        </div>
  </div>
  )
}

export default Features