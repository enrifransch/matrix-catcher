import { Application, Request, Response } from 'express';

import { ObjectID } from 'mongodb';
import { Scan } from './../models/scan';

export function apiScan(app: Application) {
    app.route('/scans')
        // POST /scans
        .post((req: Request, res: Response) => {
            const scan = new Scan({
                dateTime: new Date(),
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                mission: req.body.mission,
                scanFilters: req.body.scanFilters,
                notes: req.body.notes
            });

            scan.save().then((result) => {
                console.log('Saving scan registry:\n', JSON.stringify(result, undefined, 2));
                res.send(result);
            }, (dbError) => {
                console.log('Error saving new scan registry:\n', JSON.stringify(dbError, undefined, 2));
                res.status(400).send(dbError);
            });
        })
        // GET /scans
        .get((req: Request, res: Response) => {
            Scan.find().then((scans) => {
                res.send(
                    scans
                );
            }, (dbError) => {
                res.status(400).send(dbError);
            });
        });

    app.route('/scans/:id')
        // GET /scans/:id
        .get((req: Request, res: Response) => {

        })
        // DELETE /scan/:id
        .delete((req: Request, res: Response) => {

        });

}