export interface DashboardCategory {
  title: string;
  icon: string;
  color: string;
}

export interface CategoryWithCost {
  category: DashboardCategory;
  cost: number;
}
