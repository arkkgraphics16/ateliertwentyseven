import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface DishCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

export const DishCard = ({ name, description, price, image, tags }: DishCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="card-surface overflow-hidden rounded-3xl bg-white"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <span className="text-sm font-semibold text-primary">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-ink/70">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-muted/60 text-xs text-ink/70">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
