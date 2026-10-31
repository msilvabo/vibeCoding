import { Property } from '@/types/property';

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'feat-1',
    title: 'The Glass Pavilion',
    price: 5250000,
    listingType: 'sale',
    propertyType: 'villa',
    location: {
      address: 'Beverly Hills',
      city: 'Beverly Hills',
      state: 'California',
      country: 'USA',
      displayAddress: 'Beverly Hills, California',
    },
    specs: {
      bedrooms: 5,
      bathrooms: 4.5,
      areaM2: 4200,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
    imageAlt: 'Luxury modern villa exterior with pool',
    isFeatured: true,
    badge: 'Exclusive',
    isFavorite: false,
    createdAt: '2026-10-25T10:00:00Z',
  },
  {
    id: 'feat-2',
    title: 'Azure Heights Penthouse',
    price: 3800000,
    listingType: 'sale',
    propertyType: 'penthouse',
    location: {
      address: 'Downtown',
      city: 'Vancouver',
      state: 'BC',
      country: 'Canada',
      displayAddress: 'Downtown, Vancouver',
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      areaM2: 2100,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
    imageAlt: 'Modern interior living room with view',
    isFeatured: true,
    badge: 'New Arrival',
    isFavorite: false,
    createdAt: '2026-10-28T14:30:00Z',
  },
];

export const MARKET_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Family Home',
    price: 850000,
    listingType: 'sale',
    propertyType: 'house',
    location: {
      address: '123 Pine St',
      city: 'Seattle',
      displayAddress: '123 Pine St, Seattle',
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      areaM2: 120,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
    imageAlt: 'Modern white house facade',
    isFavorite: false,
    createdAt: '2026-10-30T09:00:00Z',
  },
  {
    id: 'prop-2',
    title: 'Urban Loft',
    price: 3200,
    listingType: 'rent',
    propertyType: 'apartment',
    location: {
      address: '456 Elm Ave',
      city: 'Portland',
      displayAddress: '456 Elm Ave, Portland',
    },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      areaM2: 85,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4',
    imageAlt: 'Stylish apartment living room',
    isFavorite: false,
    createdAt: '2026-10-29T11:20:00Z',
  },
  {
    id: 'prop-3',
    title: 'Highland Retreat',
    price: 620000,
    listingType: 'sale',
    propertyType: 'house',
    location: {
      address: '789 Mountain Rd',
      city: 'Bend',
      displayAddress: '789 Mountain Rd, Bend',
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      areaM2: 98,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro',
    imageAlt: 'Cabin in the woods',
    isFavorite: false,
    createdAt: '2026-10-28T16:45:00Z',
  },
  {
    id: 'prop-4',
    title: 'Sea View Penthouse',
    price: 4500,
    listingType: 'rent',
    propertyType: 'penthouse',
    location: {
      address: '321 Ocean Dr',
      city: 'Miami',
      displayAddress: '321 Ocean Dr, Miami',
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      areaM2: 180,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U',
    imageAlt: 'Bright bedroom with large window',
    isFavorite: false,
    createdAt: '2026-10-27T13:15:00Z',
  },
  {
    id: 'prop-5',
    title: 'Central Studio',
    price: 550000,
    listingType: 'sale',
    propertyType: 'apartment',
    location: {
      address: '555 Main St',
      city: 'Chicago',
      displayAddress: '555 Main St, Chicago',
    },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      areaM2: 50,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE',
    imageAlt: 'Cozy apartment interior',
    isFavorite: false,
    createdAt: '2026-10-26T18:00:00Z',
  },
  {
    id: 'prop-6',
    title: 'Garden Villa',
    price: 2800,
    listingType: 'rent',
    propertyType: 'villa',
    location: {
      address: '999 Oak Ln',
      city: 'Austin',
      displayAddress: '999 Oak Ln, Austin',
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      areaM2: 110,
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8',
    imageAlt: 'Modern minimalist home exterior',
    isFavorite: false,
    createdAt: '2026-10-25T12:00:00Z',
  },
  // Additional properties for 'Load more' simulation
  {
    id: 'prop-7',
    title: 'Skyline Horizon Villa',
    price: 1450000,
    listingType: 'sale',
    propertyType: 'villa',
    location: {
      address: '742 Evergreen Terrace',
      city: 'San Francisco',
      displayAddress: '742 Evergreen Terrace, San Francisco',
    },
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      areaM2: 240,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern luxury villa at dusk',
    isFavorite: false,
    createdAt: '2026-10-24T10:00:00Z',
  },
  {
    id: 'prop-8',
    title: 'Waterfront Executive Suite',
    price: 5100,
    listingType: 'rent',
    propertyType: 'penthouse',
    location: {
      address: '10 Harbor Point',
      city: 'Boston',
      displayAddress: '10 Harbor Point, Boston',
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2.5,
      areaM2: 145,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Waterfront penthouse view',
    isFavorite: false,
    createdAt: '2026-10-23T15:30:00Z',
  },
  {
    id: 'prop-9',
    title: 'Mid-Century Nordic Home',
    price: 920000,
    listingType: 'sale',
    propertyType: 'house',
    location: {
      address: '88 Forest Way',
      city: 'Boulder',
      displayAddress: '88 Forest Way, Boulder',
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      areaM2: 175,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern architecture home in nature',
    isFavorite: false,
    createdAt: '2026-10-22T08:15:00Z',
  },
  {
    id: 'prop-10',
    title: 'Artisan Loft',
    price: 6200,
    listingType: 'rent',
    propertyType: 'apartment',
    location: {
      address: '204 SoHo Square',
      city: 'New York',
      displayAddress: '204 SoHo Square, New York',
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      areaM2: 115,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Stylish loft with brick wall and large windows',
    isFavorite: false,
    createdAt: '2026-10-21T17:40:00Z',
  },
];

export function formatPrice(price: number, listingType: 'sale' | 'rent'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  if (listingType === 'rent') {
    return `${formatted}/mo`;
  }
  return formatted;
}
