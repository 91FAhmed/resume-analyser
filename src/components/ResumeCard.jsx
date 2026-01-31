import Link from "next/link";
import Image from "next/image";
import ScoreCircle from "@/components/ScoreCircle";

const ResumeCard = ({ resume }) => {
  const { id, companyName, jobTitle, feedback, imagePath } = resume;

  return (
    <Link
      href={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 space-y-4 block"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-amber-50 rounded-sm p-4">
        <div className="flex flex-col gap-2">
          {companyName && (
            <h2 className="font-bold break-words text-black">
              {companyName}
            </h2>
          )}

          {jobTitle && (
            <h3 className="text-lg break-words text-gray-500">
              {jobTitle}
            </h3>
          )}

          {!companyName && !jobTitle && (
            <h2 className="font-bold text-black">Resume</h2>
          )}
        </div>

        <div className="flex-shrink-0">
          <ScoreCircle score={feedback?.overallScore ?? 0} />
        </div>
      </div>

      {/* Resume preview */}
      {imagePath && (
        <div className="gradient-border animate-in fade-in duration-1000">
          <div className="relative w-full h-[350px] max-sm:h-[200px]">
            <Image
              src={imagePath}
              alt="Resume preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 350px"
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default ResumeCard;
