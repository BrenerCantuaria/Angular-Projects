import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-upload-excel',
  standalone: true,
  imports: [CommonModule, ButtonModule, FileUploadModule, ProgressSpinnerModule],
  templateUrl: './upload-excel.component.html',
})
export class UploadExcelComponent {
  @Output() fileUploaded = new EventEmitter<File>();
  isLoading = false;
  uploadedFileName: string | null = null;

  onUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.isLoading = true;
      this.uploadedFileName = file.name;

      setTimeout(() => {
        this.isLoading = false;
        this.fileUploaded.emit(file);
        console.log('Arquivo recebido:', file);
      }, 2000); // Simula um tempo de carregamento
    }
  }
}
