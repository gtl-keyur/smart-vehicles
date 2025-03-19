import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proxy from 'http-proxy-middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Reverse Proxy - Forward Requests to Backend
    app.use('/api', proxy.createProxyMiddleware({ target: 'http://backend:3000', changeOrigin: true }));

    await app.listen(4000);
    console.log('🚀 API Gateway running on http://localhost:4000');
}
bootstrap();
