import z from 'zod';
import { builder } from './_internal/builder.ts';
import type {
    ServerInferRequest,
    ServerInferResponseBody,
} from '@ts-rest/core';

const device = builder.router({
    code: {
        method: 'POST',
        path: '/code',
        body: z.object({
            client_id: z.string(),
        }),
        responses: {
            200: z.object({
                device_code: z.string(),
                user_code: z.string(),
                verification_url: z.string(),
                expires_in: z.number(),
                interval: z.number(),
            }),
        },
    },
    token: {
        path: '/token',
        method: 'POST',
        body: z.object({
            code: z.string(),
            client_id: z.string(),
            client_secret: z.string(),
        }),
        responses: {
            200: z.object({
                access_token: z.string(),
                token_type: z.string(),
                expires_in: z.number(),
                refresh_token: z.string(),
                scope: z.string(),
                created_at: z.number(),
            }),
            400: z.undefined(),
        },
    },
}, {
    pathPrefix: '/device',
});

export type OAuthDeviceCodeRequest = ServerInferRequest<typeof device.code>;
export type OAuthDeviceCodeResponse = ServerInferResponseBody<
    typeof device.code
>;
export type OAuthDeviceTokenRequest = ServerInferRequest<typeof device.token>;
export type OAuthDeviceTokenResponse = ServerInferResponseBody<
    typeof device.token
>;

export const oauth = builder
    .router({
        device,
    }, {
        pathPrefix: '/oauth',
    });
