import {APIGatewayEvent, Context} from 'aws-lambda';


export const handlerFactory = (newService: any) => (
    event: APIGatewayEvent,
    context: Context
) => {

    console.log('Starting in handler...', event.body);


    console.log('Search request created from body:');

    return newService;
};

export const index = handlerFactory(new Object());
