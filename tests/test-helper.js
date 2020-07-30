import Application from 'acm-octane-workshop/app';
import config from 'acm-octane-workshop/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
