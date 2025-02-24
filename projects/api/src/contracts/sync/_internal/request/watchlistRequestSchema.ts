import { bulkMediaRequestSchema } from '../../../_internal/request/bulkMediaRequestSchema.ts';

/**
 * FIXME: remove watched_at property from watchlistRequestSchema
 * everything else is the same as historyRequestSchema
 */
export const watchlistRequestSchema = bulkMediaRequestSchema;
