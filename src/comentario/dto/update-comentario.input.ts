import { CreateComentarioInput } from './create-comentario.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateComentarioInput extends PartialType(CreateComentarioInput) {
  @Field(() => ID)
  id: string;
}
