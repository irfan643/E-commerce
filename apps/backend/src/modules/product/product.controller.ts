import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductRequestDto,
  UpdateProductRequestDto,
} from './dto/createproduct.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Auth } from 'src/common/Guard/auth.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
@Auth('SELLER')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() createProductDto: CreateProductRequestDto, @Req() req) {
    const userid = req.user.sub;

    return this.productService.createproduct(createProductDto, userid);
  }
  @Post('upload-images')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImages(
    @UploadedFiles() files: Express.Multer.File[],
    @Req() req,
  ) {
    const userId = req.user.sub;
    return this.productService.uploadImages(files, userId);
  }
  @Get('MyProducts')
  async myproduct(@Req() req) {
    const userId = req.user.sub;
    return this.productService.findMyProducts(userId);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch('updata/:id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductRequestDto,
    @Req() req,
  ) {
    const userId = req.user.sub;
    return this.productService.update(id, updateProductDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
