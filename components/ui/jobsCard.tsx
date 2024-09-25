import Image from "next/image";
import React from "react";

type JobCardProps = {
  company: string;
  logo: string;
  position: string;
  isNew: boolean;
  isFeatured: boolean;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
  onTagClick: (tag: string) => void; // To handle the filter click
};

const JobCard: React.FC<JobCardProps> = ({
  company,
  logo,
  position,
  isNew,
  isFeatured,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  onTagClick,
}) => {
  // Merge role, level, languages, and tools into one array for tag filtering
  const tags = [role, level, ...languages, ...tools];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center space-x-4 border-l-4 border-teal-500">
      {/* Logo */}
      <Image src={logo} alt={`${company} logo`} width={50} height={50} className="h-12 w-12 rounded-full" />

      <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-teal-700">{company}</h4>
            {isNew && (
              <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">New!</span>
            )}
            {isFeatured && (
              <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                Featured
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg text-gray-900">{position}</h2>
          <div className="text-gray-500">
            {postedAt} · {contract} · {location}
          </div>
        </div>

        <div className="flex space-x-2 flex-wrap">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan px-2 py-1 h-fit rounded cursor-pointer"
              onClick={() => onTagClick(tag)} // Trigger the filter function when clicked
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

// import React from "react";

// type JobCardProps = {
//   company: string;
//   role: string;
//   tags: string[];
//   isNew: boolean;
//   isFeatured: boolean;
//   postedAt: string;
//   contract: string;
//   location: string;
//   onTagClick: (tag: string) => void; // Add this prop to handle the filter click
// };

// const JobCard: React.FC<JobCardProps> = ({
//   company,
//   role,
//   tags,
//   isNew,
//   isFeatured,
//   postedAt,
//   contract,
//   location,
//   onTagClick,
// }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border-l-4 border-teal-500">
//       <div className="flex-grow">
//         <div className="flex items-center space-x-2">
//           <h4 className="font-semibold text-teal-700">{company}</h4>
//           {isNew && (
//             <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">New!</span>
//           )}
//           {isFeatured && (
//             <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">Featured</span>
//           )}
//         </div>
//         <h2 className="font-bold text-lg text-gray-900">{role}</h2>
//         <div className="text-gray-500">
//           {postedAt} · {contract} · {location}
//         </div>
//         <div className="flex space-x-2 mt-2">
//           {tags.map((tag, index) => (
//             <button
//               key={index}
//               className="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan px-2 py-1 rounded cursor-pointer"
//               onClick={() => onTagClick(tag)} // Trigger the filter function when clicked
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

// // import React from "react";

// // type JobCardProps = {
// //   company: string;
// //   role: string;
// //   postedTime: string;
// //   employmentType: string;
// //   location: string;
// //   tags: string[];
// //   isNew: boolean;
// //   isFeatured: boolean;
// //   companyLogoUrl: string;
// // };

// // const JobCard: React.FC<JobCardProps> = ({
// //   company,
// //   role,
// //   postedTime,
// //   employmentType,
// //   location,
// //   tags,
// //   isNew,
// //   isFeatured,
// //   companyLogoUrl,
// // }) => {
// //   return (
// //     <div className="bg-white shadow-lg rounded-lg p-6 flex items-center border-l-4 border-teal-500 space-x-4">
// //       <img className="w-12 h-12 rounded-full" src={companyLogoUrl} alt={`${company} logo`} />
// //       <div className="flex flex-col flex-grow">
// //         <div className="flex items-center space-x-2">
// //           <h4 className="font-semibold text-teal-700">{company}</h4>
// //           {isNew && (
// //             <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">New!</span>
// //           )}
// //           {isFeatured && (
// //             <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">Featured</span>
// //           )}
// //         </div>
// //         <h2 className="font-bold text-lg text-gray-900">{role}</h2>
// //         <div className="text-gray-500 space-x-2 text-sm">
// //           <span>{postedTime}</span>
// //           <span>&bull;</span>
// //           <span>{employmentType}</span>
// //           <span>&bull;</span>
// //           <span>{location}</span>
// //         </div>
// //       </div>
// //       <div className="flex space-x-2">
// //         {tags.map((tag, index) => (
// //           <span key={index} className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
// //             {tag}
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobCard;
