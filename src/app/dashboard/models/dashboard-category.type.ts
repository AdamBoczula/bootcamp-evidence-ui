export interface DashboardCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface CategoryWithCost {
  category: DashboardCategory;
  cost: number;
}

export interface Subcategory {
  name: string;
  id: string;
}

export interface CategoryWithSubcategories extends DashboardCategory {
  subcategories?: Subcategory[];
}
