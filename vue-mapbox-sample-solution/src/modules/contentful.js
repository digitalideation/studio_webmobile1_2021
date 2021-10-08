import { createClient } from 'contentful'

class Contentful {

    constructor() {
        this.client= createClient({
        space: '80c03r0wfd8q',
        accessToken: 'D_yGVdTeebDfEbT-cM-TeNGDP5zXp3e7ResHmbzbG9w'
    })
    }

    async getCommutes() {
        let result = await this.client
            .getEntries({
                content_type: "commute"
            });
        console.log(result.items);
        return result.items;
    }

    async getFirstGPXFileUrl() {
        let result = await this.client.getEntries({
            content_type: "commute"
          });
        // This is for demo purpose only. Just reads the gpx of the first commute
        return result.items[0].fields.gpx.fields.file.url // a link to you gpx file in Contentful
          
    }

}

export default new Contentful();
