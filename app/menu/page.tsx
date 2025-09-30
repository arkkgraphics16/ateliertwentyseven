"use client";

import { useMemo, useState } from "react";
import { menuItems, type DietaryTag } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DishCard } from "@/components/dish-card";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { id: "all", label: "All" },
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Mains" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" }
];

const dietaryFilters: DietaryTag[] = ["vegan", "vegetarian", "gluten-free", "spicy"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<DietaryTag[]>([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => item.tags?.includes(tag));
      return matchesCategory && matchesSearch && matchesTags;
    });
  }, [activeCategory, search, selectedTags]);

  const toggleTag = (tag: DietaryTag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <div className="container-grid mt-16 pb-24">
      <header className="flex flex-col gap-6 text-center sm:text-left">
        <Badge className="mx-auto sm:mx-0">Curated collection</Badge>
        <h1 className="text-4xl font-semibold">Menu</h1>
        <p className="text-lg text-ink/70">
          International signatures and seasonal plates. Filter by category or dietary preference to plan your perfect meal.
        </p>
      </header>
      <div className="mt-10 space-y-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-ink shadow-atelier hover:bg-muted/60"
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[2fr,3fr]">
          <Input
            placeholder="Search dishes"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search dishes"
          />
          <div className="flex flex-wrap gap-4">
            {dietaryFilters.map((filter) => (
              <Checkbox
                key={filter}
                label={filter.replace(/(^|-)\w/g, (s) => s.toUpperCase())}
                checked={selectedTags.includes(filter)}
                onChange={() => toggleTag(filter)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <DishCard key={item.id} name={item.name} description={item.description} price={item.price} image={item.image} tags={item.tags} />
          ))
        ) : (
          <p className="text-ink/70">No dishes found. Adjust your filters.</p>
        )}
      </div>
    </div>
  );
}
