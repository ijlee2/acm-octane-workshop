import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';

export default class InputComponentComponent extends Component {
    @task(
        function*(event) {
            yield timeout(50);

            const { value } = event.target;

            if (this.args.onInput) {
                this.args.onInput(value);
            }
        }
    ).restartable() updateQuery;
}
