import Image from 'next/image'
import { Heart, MapPin, Bed, Columns } from 'lucide-react'
import { motion } from 'framer-motion'
import { Property } from 'lib/properties'
const formatCurrency = (n: number) => {
  return n.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 })
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="relative h-48 w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <button aria-label="save" className="bg-white/90 p-2 rounded-lg shadow-md hover:bg-white">
            <Heart size={18} />
          </button>
        </div>
        {property.featured && (
          <span className="absolute left-3 top-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{property.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
              <MapPin size={14} /> {property.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">{formatCurrency(property.price)}</p>
            <p className="text-xs text-slate-500">per sale</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
          <span className="flex items-center gap-1"><Bed size={14} /> {property.beds}</span>
          <span className="flex items-center gap-1"><Columns size={14} /> {property.baths}</span>
          <span className="flex items-center gap-1"><Columns size={14} /> {property.area} sqft</span>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg px-4 py-2 border border-slate-200 text-sm font-medium hover:bg-slate-50">View</button>
          <button className="rounded-lg px-4 py-2 bg-emerald-600 text-white text-sm font-medium hover:opacity-95">Contact</button>
        </div>
      </div>
    </motion.article>
  )
}

export default PropertyCard