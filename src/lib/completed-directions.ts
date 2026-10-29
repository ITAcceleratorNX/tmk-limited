/** Direction cards moved from «Наши услуги» into «Завершённые проекты». */
export const COMPLETED_DIRECTION_IDS = ["agriculture", "horeca"] as const;

export type CompletedDirectionId = (typeof COMPLETED_DIRECTION_IDS)[number];

export function isCompletedDirection(id: string): id is CompletedDirectionId {
  return (COMPLETED_DIRECTION_IDS as readonly string[]).includes(id);
}
