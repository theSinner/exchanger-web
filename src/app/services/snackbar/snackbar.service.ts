import { Injectable }                     from '@angular/core';
import { MatSnackBar }                    from '@angular/material';


declare const jQuery:any;
declare const $ :any;

@Injectable()
export class SnackbarService {

	constructor(public snackBar: MatSnackBar) { }

	public openSnack(){
			this.snackBar.open('Loading...', '',{panelClass: 'snackBarBox',
																									horizontalPosition: 'center',
																									verticalPosition: 'bottom'});
	}

	public openAlertSnack(str){
		this.snackBar.open(str, 'OK', { duration: 6000,
																			panelClass: 'snackBarBox',
																			verticalPosition: 'bottom',
																			horizontalPosition: 'center'
																		});
	}

	public dismissSnackbar(){
		this.snackBar.dismiss()
	}

}
