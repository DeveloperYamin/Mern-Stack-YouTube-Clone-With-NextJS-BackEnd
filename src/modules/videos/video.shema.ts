import { string, boolean, object, TypeOf } from "zod";

export const updateVideoSchema = {
  body: object({
    title: string(),
    description: string(),
    published: boolean(),
  }),
  params: object({
    videoId: string(),
  }),
};

export type UpdateVideoBody = TypeOf<typeof updateVideoSchema.body>;
export type UpdateVideoParams = TypeOf<typeof updateVideoSchema.params>;
