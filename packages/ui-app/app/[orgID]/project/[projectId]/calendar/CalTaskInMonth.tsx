import MemberAvatar from "@/components/MemberAvatar";

export default function CalTaskInMonth({
  color,
  title,
  assigneeId
}: {
  color: string,
  title: string,
  assigneeId: string
}) {

  return <>
    <div
      className='absolute left-0 top-0 h-full w-[3px]'
      style={{ backgroundColor: color }}></div>
    <div className="flex items-center justify-between gap-1" title={title}>
      <span className="truncate dark:text-gray-400">{title}</span>
      <MemberAvatar noName={true} uid={assigneeId} />
    </div>
  </>
}
