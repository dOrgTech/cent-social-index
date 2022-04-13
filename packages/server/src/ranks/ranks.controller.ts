import isEthereumAddress from 'validator/lib/isEthereumAddress'
import { ethers } from 'ethers'
import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common'
import { RanksService } from 'src/ranks/ranks.service'
import { ErrorMessage } from 'src/_constants/errors'

@Controller('ranks')
export class RanksController {
  constructor(private readonly ranksService: RanksService) {}
  @Get('/:address')
  async rank(@Param('address') address: string) {
    if (!isEthereumAddress(address)) {
      throw new HttpException(ErrorMessage.NotAnEthAddress, HttpStatus.BAD_REQUEST)
    }

    const normalizedAddress = ethers.utils.getAddress(address.toLowerCase())

    try {
      return await this.ranksService.getRankByAddress(normalizedAddress)
    } catch (error) {
      throw new HttpException(ErrorMessage.InternalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
