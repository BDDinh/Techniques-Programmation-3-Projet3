import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './interfaces/forfait';

@Pipe({
  name: 'forfaitMiniFilter',
  pure: true
})
export class ForfaitMiniCandidatPipe implements PipeTransform {

  transform(forfaits: Forfait[]): any {
    if (!forfaits) {
      return forfaits;
    }

    return forfaits.filter((forfait: Forfait) => forfait.vedette === true );
  }

}

// Source: https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor