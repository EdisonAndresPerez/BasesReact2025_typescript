import { PropsWithChildren, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatVideoGamesProps extends PropsWithChildren {
  title: string;
  value?: string | number;
  description?: string;
  icon?: ReactNode;
  valueClassName?: string;
}

const StatVideoGames = ({
  title,
  value,
  description,
  icon,
  valueClassName,
  children,
}: StatVideoGamesProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        {value !== undefined && (
          <div className={`text-2xl font-bold ${valueClassName ?? ""}`}>{value}</div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default StatVideoGames;
