import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { ContractsService } from 'src/contracts/contracts.service'
import { AnyblockService } from 'src/anyblock/anyblock.service'
import { Env } from 'src/_constants/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const contractService = app.get(ContractsService)
  await contractService.create('contract_address', 'ERC721')
  const contracts = await contractService.findAll()
  console.log('local contracts => ', contracts)

  const anyblockService = app.get(AnyblockService)
  const abContractsCount = await anyblockService.findAllContractsCount()
  console.log('any block contracts count => ', abContractsCount)

  const port = process.env[Env.Port] || 3000
  await app.listen(port)
  Logger.log(`Running on port:${port} in ${process.env.NODE_ENV} mode`)
}
bootstrap()
