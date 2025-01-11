
import Link from "next/link";

import {  Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,} from "./ui/breadcrumb"
import React from "react";

interface BreadcrumbData {
  name: string;
  link?: string;
}

interface BreadCrumbsProps {
  breadcrumbs: BreadcrumbData[];
}

export function BreadCrumbs({ breadcrumbs }: BreadCrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.link ? (
                <BreadcrumbLink>
                  <Link href={item.link}>{item.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
