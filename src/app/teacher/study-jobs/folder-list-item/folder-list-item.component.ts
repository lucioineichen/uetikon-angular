import { Component, Input } from '@angular/core'
import { IRef } from 'src/app/interfaces'

@Component({
  selector: 'app-folder-list-item [folder]',
  templateUrl: './folder-list-item.component.html',
  styleUrls: ['./folder-list-item.component.css'],
})
export class FolderListItemComponent {
  @Input() folder!: IRef
}
