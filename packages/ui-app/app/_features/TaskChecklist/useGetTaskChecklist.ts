import { useChecklistStore } from "./store";
import { taskChecklistSv } from "@/services/task.checklist";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect } from "react";

export default function useGetTaskChecklist(taskId: string) {

  const { addTaskChecklist, setCheclistLoading } = useChecklistStore()

  useEffect(() => {
    setCheclistLoading(true)
  }, [])

  useDebounce(() => {

    taskChecklistSv.getByTaskId(taskId).then(res => {
      const { data } = res.data

      if (!data) {
        setCheclistLoading(false)
        return
      }

      console.log('task checklist return ', data)
      addTaskChecklist(taskId, data)
      setCheclistLoading(false)

    }).catch(err => {
      console.log(err)
      setCheclistLoading(false)
    })
  }, [taskId])
}
