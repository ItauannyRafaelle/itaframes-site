interface SkillProgressProps {
  skill: string;
  percentage: number;
  color?: string;
}

const SkillProgress = ({ skill, percentage, color = "bg-primary" }: SkillProgressProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill}</span>
        <span className="text-sm text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ease-out ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;