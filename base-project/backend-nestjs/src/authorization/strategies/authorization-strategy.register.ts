import { Authorization } from '../client/authorization';
import { Logger } from '@nestjs/common';

export const StrategiesKeyById: Record<string, Authorization> = {};

/**
 * @param identify the key which help authorization module identify strategy out of the box
 * @param strategy the authorization strategy use to authorize
 * and can interact with nestjs module out of the box
 */
export function useAuthorizationStrategy(
  identify: string,
  strategy: Authorization,
) {
  const logger = new Logger('AuthorizationStrategy');
  logger.log(`Initializing strategy ${identify}`);
  StrategiesKeyById[identify] = strategy;
}
