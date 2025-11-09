import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs() {
  const [location] = useLocation();
  
  // Don't show breadcrumbs on home page
  if (location === "/" || location === "/landing") {
    return null;
  }

  const pathSegments = location.split("/").filter(Boolean);
  
  // Generate breadcrumb items from path
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" }
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert URL segments to readable labels
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    // Last item shouldn't be a link
    if (index === pathSegments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, href: currentPath });
    }
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            )}
            {crumb.href ? (
              <Link href={crumb.href}>
                <a className="hover:text-foreground transition-colors flex items-center gap-1">
                  {index === 0 && <Home className="h-4 w-4" />}
                  {crumb.label}
                </a>
              </Link>
            ) : (
              <span className="text-foreground font-medium flex items-center gap-1">
                {index === 0 && <Home className="h-4 w-4" />}
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

