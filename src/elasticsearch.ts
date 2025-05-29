import { Client } from '@elastic/elasticsearch';
import { config } from '@notifications/config';
import { winstonLogger } from '@aprydatko/jobber-shared';
import { Logger } from 'winston';
import { ClusterHealthHealthResponseBody } from '@elastic/elasticsearch/lib/api/types';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationElasticSearchServer', 'debug');

const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`
})

export async function checkConnection(): Promise<void>{
  let isConnected = false;
  while(!isConnected) {
    try {
      const health: ClusterHealthHealthResponseBody = await elasticSearchClient.cluster.health({});
      log.info(`NotificationService Elasticsearch health status — ${health.status}`);
      isConnected = true;
    } catch(error) {
      log.error('Connection to Elasticsearch failed. Retrying...');
      log.log('error', 'NotificationService checkConnection() method:', error);
    }
  }
}