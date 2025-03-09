export class Utils{
    formatDate(iso: string){
        return new Date(iso).toLocaleString('sr-RS')
      }
}