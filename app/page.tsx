"use client";

import FilterBar from "@/components/ui/filterBar";
import JobCard from "@/components/ui/jobsCard";
import Jobs from "@/data/data.json";
import { useState } from "react";

export default function Home() {
  const jobsData: Job[] = Jobs.map((job) => ({
    ...job,
    isNew: job.new, // Map 'new' to 'isNew'
    isFeatured: job.featured, // Map 'featured' to 'isFeatured'
  }));
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = filters.length
    ? jobsData.filter((job) =>
        filters.every((filter) => [job.role, job.level, ...job.languages, ...job.tools].includes(filter))
      )
    : jobsData;

  console.log({ Jobs });

  return (
    <>
      <section className="max-w-[1440px] mx-auto relative px-4">
        <div className="absolute w-full -mt-8">
          <FilterBar filters={filters} onRemoveFilter={removeFilter} onClearFilters={clearFilters} />
        </div>

        <div className="space-y-6 py-20">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              logo={job.logo}
              position={job.position}
              isNew={job.isNew}
              isFeatured={job.isFeatured}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              role={job.role}
              level={job.level}
              languages={job.languages}
              tools={job.tools}
              onTagClick={addFilter} // Pass the function to handle adding filters
            />
          ))}
        </div>
      </section>
    </>
  );
}

type Job = {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  isNew: boolean;
  isFeatured: boolean;
  languages: string[];
  tools: string[];
};
